import { ButtonOrLink, Logo } from 'ui';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-900 md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ButtonOrLink href="https://flowbite.com/" className="mb-4 flex items-center sm:mb-0">
          <Logo />
        </ButtonOrLink>
        <ul className="mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
          <ButtonOrLink href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </ButtonOrLink>
          <li>
            <ButtonOrLink href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </ButtonOrLink>
          </li>
          <li>
            <ButtonOrLink href="#" className="mr-4 hover:underline md:mr-6 ">
              Terms & Conditions
            </ButtonOrLink>
          </li>
          <li>
            <ButtonOrLink href="#" className="hover:underline">
              Contact
            </ButtonOrLink>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{' '}
        <ButtonOrLink href="https://flowbite.com/" className="hover:underline">
          DY™
        </ButtonOrLink>
        | All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
