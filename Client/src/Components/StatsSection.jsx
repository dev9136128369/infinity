import React from 'react';

const StatsSection = ({ data, title, backgroundColor, textColor, accentColor }) => {
  return (
    <section 
      className="stats-section" 
      style={{ 
        backgroundColor: backgroundColor || '#f8f9fa',
        color: textColor || '#333'
      }}
    >
      {title && <h2 className="stats-section-title">{title}</h2>}
      
      <div className="stats-container">
        {data.map((stat, index) => (
          <div key={index} className="stat-card">
            <div 
              className="stat-icon"
              style={{ backgroundColor: accentColor || '#3b82f6' }}
            >
              <i className={stat.icon}></i>
            </div>
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-description">{stat.description}</p>
            {stat.value && <div className="stat-value">{stat.value}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

// Default props in case none are provided
StatsSection.defaultProps = {
  data: [
    {
      icon: 'fas fa-handshake',
      title: 'CUSTOMERS',
      description: 'Our real estate agency has earned the satisfaction of 1,000 clients who consistently return, reflecting their unwavering trust in our property services.',
      value: '1,000+'
    },
    {
      icon: 'fas fa-people-arrows',
      title: 'EXPERTS',
      description: 'Our team comprises of over 50+ highly qualified and extensively trained real estate professionals who are committed to providing exceptional service.',
      value: '50+'
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'TIE-UPS',
      description: 'With a network comprising with channel partners, our organization has gained a reputation for collaborating with credible and highly esteemed business entities.',
      value: '100+'
    }
  ],
  title: 'Why Choose Us?',
  backgroundColor: '#f8f9fa',
  textColor: '#333',
  accentColor: '#3b82f6'
};

export default StatsSection;