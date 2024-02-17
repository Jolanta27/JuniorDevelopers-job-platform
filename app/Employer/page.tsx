import React from 'react';
import Button from '../components/ui/Button';

interface HeaderProps {
  title: string;
}
interface SubHeaderProps {
  subtitle: string;
}
interface ParagraphProps {
  children: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ title }) => <h1 className='text-4xl font-semibold'>{title}</h1>;

const SubHeader: React.FC<SubHeaderProps> = ({ subtitle }) => <h2 className='text-2xl'>{subtitle}</h2>;

const Paragraph: React.FC<ParagraphProps> = ({ children }) => <p className='text-xl'>{children}</p>;

const Employer = () => {
  return (
  <div className='text-center w-3/4 m-auto pt-10 space-y-4 mt-20'>
    <Header title="Discover Your Next Junior Development Talent" />
    <SubHeader subtitle="Welcome to our platform - the premier destination for finding talented and motivated junior developers." />
    <Paragraph>
      Our platform connects forward-thinking companies with the next generation of tech talent, making it easier than ever to hire exceptional junior developers who are eager to make their mark in the industry.
    </Paragraph>
    <Paragraph>With focus on supporting both employers and aspiring developers, we provide a streamlined and effective platform for posting job opportunities, accesing a curated pool of junior development talent, and engaging with potential candidates.
    </Paragraph>
    <Paragraph>Whether you are a startup, a growing company, or an established organization, our platform is your gateaway to discovering and hiring the best junior developers for your team.
    </Paragraph>
    <Button />
  </div>
  );
};

export default Employer;
