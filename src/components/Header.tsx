type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className='header'>
      <h1 className='title'>{title?.toUpperCase()}</h1>
    </header>
  );
}
