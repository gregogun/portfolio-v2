import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container as ChakraContainer,
  Grid,
  GridItem,
  Link
} from '@chakra-ui/layout';
import Container from '../components/container';
import * as tool from '@/data/tools';
import Icon from '@chakra-ui/icon';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import useToggle from '@/utils/hooks/useToggle';
import { youtube, twitch, discord } from '@/data/socials';

const About = () => {
  return (
    <Container>
      <ContentWrapper>
        <Intro />
        <Skills />
        <Contact />
      </ContentWrapper>
    </Container>
  );
};

const Intro = () => {
  return (
    <Box as="section" px={{ base: '1rem', xl: '20rem' }}>
      <Heading mb="6.5rem" w={{ base: '90%', sm: '100%' }} as="h1" variant="h1">
        About
      </Heading>
      <Heading as="h3" variant="h3">
        Background
      </Heading>
      <ChakraContainer p={0}>
        <Text mb="2rem">
          Hey there! I’m Greg, a self-taught developer exploring what’s possible
          on the web.
        </Text>
        <Text mb="2rem">
          I like to spend my time designing and building projects that interest
          me, as well as pushing myself to learn more through group projects and
          open source contributions.
        </Text>
        <Text mb="6.5rem">
          I studied Music Technology at Bournemouth University and currently
          work in retail where I’m hoping to make a career change and get my
          first gig in tech!
        </Text>
        <Heading as="h3" variant="h3">
          What I’ve been up to
        </Heading>
        <Text mb="2rem">
          I've been recently focused on building React (specifically Next.js)
          applications, using popular UI tools such as styled components, Chakra
          UI and Storybook to help me bring my designs to life through creating,
          documenting and testing reusable components.{' '}
        </Text>
        <Text mb="2rem">
          I love to learn and build in public, which I’ve taken to the next
          level through live coding on <Link href={twitch.href}>Twitch</Link>{' '}
          and <Link href={youtube.href}>Youtube</Link>.
        </Text>
        <Text mb="6.5rem">
          I’ve also recently become a Facilitator at{' '}
          <Link href="https://chingu.io/">Chingu</Link> where I review project
          submissions and support individuals and teams. Exciting times!
        </Text>
        <Heading as="h3" variant="h3">
          Interests
        </Heading>
        <Text mb="2rem">
          I’m currently interested in building and supporting community around
          web development, whether that be through my participation in Chingu,
          livestreams, <Link href={discord.href}>my discord</Link> or some cool
          things I’m working on that I can’t tell you about just yet!
        </Text>
        <Text mb="2rem">
          I’m also really into <em>Design Systems</em> and{' '}
          <em>Component Driven User Interfaces</em> and I love to explore the
          tools and techniques that help to create more scalable and
          maintainable UI’s.
        </Text>
        <Text mb="2rem">
          When I'm not coding (or writing or reading about it) you'll typically
          find me engaging with another creative or engaging activity such as
          writing music, 3D motion design, gaming, curating playlists or getting
          lost in a Netflix series!
        </Text>
        <Text>
          Although I love to keep myself busy with activities, I make sure to
          set aside to spend with family, going for walks and runs, as well as
          taking some time out for self-reflection when I can.
        </Text>
      </ChakraContainer>
    </Box>
  );
};

const Skills = () => {
  // convert object properties to array for mapping
  const skills = Object.values(tool).slice(0, 12);
  return (
    <Box w="100%" as="section">
      <SectionHeading mb="8rem" as="h3" variant="h3">
        Tools & Technologies
      </SectionHeading>
      <ChakraContainer textAlign="center" p={0}>
        <Text mb="8rem">
          One of my favourite things since I starting to learn to code has been
          to see all of the amazing tools other humans have created to make
          other humans’ lives easier. Here are some of the tools I utilise most
          regularly.
        </Text>
      </ChakraContainer>
      <Grid
        m="auto"
        w={{ md: '80%' }}
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={6}
        as="ul"
      >
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            key={skill.id}
          />
        ))}
      </Grid>
    </Box>
  );
};

const Skill = ({ name, icon, color }) => {
  const [hover, toggleHover] = useToggle();
  return (
    <GridItem
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      p={{ base: '0.5rem', '2xl': '1rem' }}
      textAlign="center"
      alignContent="center"
      display="flex"
      flexDirection="column"
      listStyleType="none"
      as="li"
    >
      <Icon
        mx="auto"
        mb="0.5rem"
        boxSize={{ base: '2rem', lg: '3rem', '2xl': '4rem' }}
        as={icon}
        fill={hover && color}
        transitionDuration="500ms"
      />
      {name}
    </GridItem>
  );
};

const Contact = () => {
  return (
    <Box p={{ base: '1rem', md: 0 }} w="100%" as="section">
      <SectionHeading mb="4rem" as="h3" variant="h3">
        Get in touch
      </SectionHeading>
      <ChakraContainer p={0}>
        <Text textAlign={{ md: 'center' }}>
          I'm currently looking for part-time, full-time and freelance roles. If
          you're interested in hiring me, would like to collaborate on a
          project, or would just like to say hi, then feel free to drop me an{' '}
          {''}
          <Link href="mailto:gregogun97@gmail.com" isExternal>
            email
          </Link>
          . I'll endeavour to get back to you as soon as I can!
        </Text>
      </ChakraContainer>
    </Box>
  );
};

const SectionHeading = ({ children, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <HStack {...props} w="100%">
      <Box flex="1" h="1px" bg={colorGrey} />
      <Heading textAlign="center" px="1rem" as="h3" variant="h3">
        {children}
      </Heading>
      <Box flex="1" h="1px" bg={colorGrey} />
    </HStack>
  );
};

const ContentWrapper = ({ children }) => {
  return (
    <VStack w="100%" align="start" spacing={{ base: '10rem', lg: '15rem' }}>
      {children}
    </VStack>
  );
};

export default About;
