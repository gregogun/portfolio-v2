import { ProjectCard } from '@/components/projectCard';
import { react } from '@/data/tools';
import { Logo } from '../svg';

export default {
  title: 'Style Guide/Components/Card/Project',
  component: ProjectCard
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: <Logo />,
  title: 'Project Card',
  description: 'Some arbitruary description here.',
  tools: [react, react, react]
};
