import { auth} from "@clerk/nextjs";

export default function Example() {
    const { userId } = auth();

  return <div>Hello, {userId} welcome to Clerk</div>;
}