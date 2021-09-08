import Link from 'next/link';

const NextLink = ({ route, link }) => {
  return (
    <Link href={route}>
      <a>{link}</a>
    </Link>
  );
};

export default NextLink;
