interface AboutProps {
  params: {
    user: string;
  };
}

export default function About({ params }: AboutProps) {
  return (
    <div>
      {params.user}
      <p>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </div>
  );
}
