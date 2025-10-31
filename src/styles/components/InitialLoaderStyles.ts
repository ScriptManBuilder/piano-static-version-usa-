import styled, { keyframes, css } from 'styled-components';

// Анимации
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Основной контейнер
export const LoaderContainer = styled.div<{ $isComplete: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  
  ${props => props.$isComplete && css`
    animation: ${fadeOut} 0.8s ease-in-out forwards;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
    animation: ${pulse} 4s ease-in-out infinite;
  }
`;

export const LoaderContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
  max-width: 500px;
  padding: 0 20px;
`;

export const Logo = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(45deg, #ffffff, #a8edea, #fed6e3);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 10px 0;
  letter-spacing: 3px;
  animation: ${shimmer} 3s ease-in-out infinite;
  font-family: 'Inter', sans-serif;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;

export const Tagline = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  margin: 0 0 40px 0;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 1px;
  color: #e0e0e0;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const SpinnerContainer = styled.div`
  margin: 30px 0 40px 0;
  position: relative;
  
  @media (max-width: 768px) {
    margin: 20px 0 30px 0;
  }
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top: 3px solid #ffffff;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ProgressSection = styled.div`
  margin: 40px 0 30px 0;
  
  @media (max-width: 768px) {
    margin: 30px 0 20px 0;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 15px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${shimmer} 2s ease-in-out infinite;
  }
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  background-size: 200% 100%;
  border-radius: 3px;
  transition: width 0.3s ease-out;
  width: ${props => props.$progress}%;
  position: relative;
  animation: ${shimmer} 2s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
    border-radius: 3px;
  }
`;

export const ProgressText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
`;

export const LoadingText = styled.div`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  opacity: 0.8;
  color: #b0b0b0;
  margin-top: 20px;
  line-height: 1.4;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  animation: ${fadeIn} 2s ease-out;
  
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;