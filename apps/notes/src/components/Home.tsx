import { Button, Container, Link } from 'ui';

export const Home = () => (
  <Container>
    <div className="space-y-6">
      <div className="text-center text-8xl font-bold italic">
        <span className="bg-gradient-to-r from-[#9b51e0] to-[#2d9cdb] bg-clip-text px-4 text-transparent">notely</span>
      </div>
      <div className="prose-lg mt-8">
        Welcome to <span className="italic underline">Movie</span>, a project scaffold by{' '}
        <Link href="https://github.com/davlet61" rel="noopener" target="_blank">
          @dyakshib
        </Link>
        . This project contains a very minimal note-taking application.
      </div>

      <Button href="/notes" fullWidth>
        View Your Notes
      </Button>
    </div>
  </Container>
);
