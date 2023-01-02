import { Button, Container, Link } from 'ui';

const Home = () => (
  <Container>
    <div className="space-y-6">
      <div className="text-center text-8xl font-bold italic">
        <span className="bg-gradient-to-r from-[#9b51e0] to-[#2d9cdb] bg-clip-text px-4 text-transparent">notely</span>
      </div>
      <div className="prose-lg mt-8">
        Welcome to <span className="underline">Notely</span>, a project bootsrap by{' '}
        <Link href="https://github.com/davlet61" rel="noopener" target="_blank">
          @dyakshib
        </Link>
        . This project is a very minimal note-taking application example of Micro-frontend architecture with Module
        Federation.
      </div>

      <Button href="/notes" fullWidth>
        View Your Notes
      </Button>
    </div>
  </Container>
);

export default Home;
