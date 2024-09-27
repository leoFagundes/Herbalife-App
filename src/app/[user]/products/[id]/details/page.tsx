interface ProductDetailsProps {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <div>details {params.id}</div>;
}
