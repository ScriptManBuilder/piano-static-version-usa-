import { useState, useEffect } from 'react';

/**
 * Hook for managing initial site loading
 * Shows loader while critical resources are loading
 */
export const useInitialLoader = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Check if site was already loaded in this session
    const hasLoaded = sessionStorage.getItem('siteInitiallyLoaded');
    
    if (hasLoaded === 'true') {
      setIsInitialLoading(false);
      setLoadingProgress(100);
      return;
    }

    const startTime = Date.now();
    const minLoadingTime = 4000; // Минимум 4 секунды
    const maxLoadingTime = 10000; // Максимум 10 секунд
    
    let isFinished = false;

    // Плавное увеличение прогресса с более реалистичной скоростью
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 85) return prev; // Останавливаемся на 85% для ожидания ресурсов
        const increment = Math.random() * 6 + 2; // От 2% до 8% за раз
        return Math.min(prev + increment, 85);
      });
    }, 200); // Обновляем каждые 200мс для плавности

    // Функция проверки загрузки ресурсов
    const checkResourcesLoaded = () => {
      // Проверяем что DOM готов
      if (document.readyState !== 'complete') {
        return false;
      }

      // Проверяем что все изображения загружены
      const images = Array.from(document.querySelectorAll('img'));
      const allImagesLoaded = images.length === 0 || images.every(img => {
        if (img.complete && img.naturalHeight !== 0) return true;
        if (img.src.includes('data:') || img.src.includes('blob:')) return true; // Skip data URLs
        return false;
      });
      
      // Проверяем что все видео готовы (метаданные загружены)
      const videos = Array.from(document.querySelectorAll('video'));
      const allVideosReady = videos.length === 0 || videos.every(video => video.readyState >= 1); // HAVE_METADATA

      // Проверяем что CSS анимации готовы (проверяем наличие ключевых элементов)
      const criticalElements = document.querySelectorAll('main, header, [data-animate]');
      const elementsReady = criticalElements.length > 0;

      return allImagesLoaded && allVideosReady && elementsReady;
    };

    // Проверяем готовность каждые 300мс для оптимальной производительности
    const checkInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const resourcesReady = checkResourcesLoaded();

      // Условие завершения:
      // 1. Прошло минимум 4 секунды И ресурсы загружены
      // ИЛИ
      // 2. Прошло максимум 10 секунд (принудительно)
      if ((elapsed >= minLoadingTime && resourcesReady) || elapsed >= maxLoadingTime) {
        if (!isFinished) {
          isFinished = true;
          finishLoading();
        }
      }
    }, 300);

    function finishLoading() {
      clearInterval(progressInterval);
      clearInterval(checkInterval);
      
      // Доводим прогресс до 100% с плавным переходом
      setLoadingProgress(100);
      
      // Небольшая задержка для плавности анимации завершения
      setTimeout(() => {
        setIsInitialLoading(false);
        sessionStorage.setItem('siteInitiallyLoaded', 'true');
        
        // Добавляем класс для запуска анимаций на главной странице
        document.body.classList.add('initial-load-complete');
      }, 800); // Задержка для лучшего UX
    }

    return () => {
      clearInterval(progressInterval);
      clearInterval(checkInterval);
    };
  }, []);

  return { isInitialLoading, loadingProgress };
};