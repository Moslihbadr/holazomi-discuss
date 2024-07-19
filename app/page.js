// import { signIn, signOut } from "@/actions";
// import { auth } from "@/auth";
// import { Button } from "@nextui-org/react";

export default async function Home() {
  // const session = await auth();

  return (
    <>
    home page
      {/* server component */}
      {/* {session?.user ? (
        <form action={signIn}>
          <Button type="submit">SignIn</Button>
        </form>
      ) : (
        <form action={signOut}>
          <Button type="submit">SignOut</Button>
        </form>
      )} */}
    </>
  );
}

// client component
// "use client";
// import { useSession } from "next-auth/react"

// export default async function Home() {
//   const session = useSession();

//   return (
//     <>
//       {session.data?.user ? (
//         <form action={signIn}>
//           <Button type="submit">SignIn</Button>
//         </form>
//       ) : (
//         <form action={signOut}>
//           <Button type="submit">SignOut</Button>
//         </form>
//       )}
//     </>
//   );
// }
