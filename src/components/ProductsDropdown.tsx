import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import {
  DropdownWrapper,
  DropdownContent,
  CategoriesSection,
  CategoryTitle,
  CategoryList,
  CategoryItem,
  FeaturedSection,
  FeaturedTitle,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ViewAllButton
} from '../styles/components/ProductsDropdownStyles';

interface ProductsDropdownProps {
  isVisible: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  selectedCategory?: string;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ 
  isVisible, 
  onClose, 
  onMouseEnter, 
  onMouseLeave,
  selectedCategory = 'all'
}) => {
  const { formatPrice } = usePrice();
  
  // Курсы по пианино - быстрый доступ к основным категориям
  const categories = [
    { id: 1, name: 'Piano basics', icon: '🎹', productId: 1 },
    { id: 2, name: 'Piano Fundamentals', icon: '🎼', productId: 3 },
    { id: 3, name: 'Sheet Music Reading', icon: '🎵', productId: 5 },
    { id: 4, name: 'Fingering Techniques', icon: '🎯', productId: 10 },

  ];
  
  // Показываем только 2 курса для компактности
  const featuredProducts = products.slice(0, 2);

  const handleCategoryClick = (productId: number) => {
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isVisible) return null;

  return (
    <DropdownWrapper
      data-dropdown="products"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DropdownContent>
        <CategoriesSection>
          <CategoryTitle>Quick Access</CategoryTitle>
          <CategoryList>
            {categories.map((category) => (
              <CategoryItem 
                key={category.id}
                as={Link} 
                to={`/product/${category.productId}`}
                onClick={() => handleCategoryClick(category.productId)}
              >
                <span style={{ marginRight: '8px', fontSize: '1.1em' }}>
                  {category.icon}
                </span>
                <span style={{ fontWeight: '500' }}>
                  {category.name}
                </span>
              </CategoryItem>
            ))}
            <CategoryItem 
              as={Link} 
              to="/products"
              onClick={handleLinkClick}
              style={{ 
                borderTop: '1px solid #e5e5e5', 
                marginTop: '8px', 
                paddingTop: '8px',
                fontWeight: '600'
              }}
            >
              <span style={{ marginRight: '8px', fontSize: '1.1em' }}>📚</span>
              All Courses
            </CategoryItem>
          </CategoryList>
        </CategoriesSection>

        <FeaturedSection>
          <FeaturedTitle>Featured Piano Courses</FeaturedTitle>
          <ProductGrid>
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                as={Link} 
                to={`/product/${product.id}`}
                onClick={handleLinkClick}
              >
                <ProductImage src={product.image} alt={product.name} />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </FeaturedSection>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default ProductsDropdown;