import { Button } from "@/components/ui/button";

interface HomeProps {
  children: React.ReactNode;
}


export default function Home({ children }: HomeProps) {
  return (
    <div>
      <h1>Home</h1>
    {children}
    </div>



  );
}
