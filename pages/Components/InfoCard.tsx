import React, { ReactNode, CSSProperties } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'highlighted' | 'subtle';
  className?: string;
  titleAlign?: 'left' | 'center' | 'right';
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  children, 
  variant = 'default',
  className = '',
  titleAlign = 'left'
}) => {
  const getVariantStyles = (): CSSProperties => {
    switch (variant) {
      case 'highlighted':
        return {
          backgroundColor: '#f8f9fa',
          borderLeft: '4px solid #007bff',
        };
      case 'subtle':
        return {
          backgroundColor: '#ffffff',
          border: '1px solid #eee',
        };
      default:
        return {
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        };
    }
  };

  const styles: Record<string, CSSProperties> = {
    card: {
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1rem',
      transition: 'all 0.3s ease',
      ...getVariantStyles(),
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#333333',
      marginBottom: '1rem',
      borderBottom: '1px solid #eee',
      paddingBottom: '0.5rem',
      textAlign: titleAlign,
    },
    content: {
      color: '#666666',
      lineHeight: 1.6,
    },
    paragraph: {
      margin: '0.5rem 0',
    },
  };

  return (
    <div style={styles.card} className={className}>
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.content}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === 'p') {
            return React.cloneElement(child as React.ReactElement, {
              style: {
                ...styles.paragraph,
                ...(child.props.style || {}),
              } as CSSProperties,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default InfoCard;
