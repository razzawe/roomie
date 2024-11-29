interface HeaderProps {
  logoSrc: string;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header style={{
      gridColumn: '1 / -1',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '2rem',
        fontWeight: 'bold',
        letterSpacing: '2px', // Add some letter spacing
        color: '#333' // Dark gray color
      }}>
        ROOMIT
      </h1>
    </header>
  );
};
