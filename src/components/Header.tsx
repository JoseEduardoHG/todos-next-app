type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className=''>
      <div className=''>
        <h1>{title?.toUpperCase()}</h1>
      </div>
    </header>
  );
}
