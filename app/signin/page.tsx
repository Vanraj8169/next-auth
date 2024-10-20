"use client";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
    const router = useRouter();
    
    return (
        <div>
            <button onClick={() => signIn("google", { callbackUrl: "/" })}>
                Login with Google
            </button>
            <br />
            <button onClick={() => signIn("github", { callbackUrl: "/" })}>
                Login with GitHub
            </button>
            <br />
            <button onClick={async () => {
                const res = await signIn("credentials", {
                    username: "",
                    password: "",
                    redirect: false,
                });
                console.log(res);
                if (res?.ok) {
                    router.push("/");
                }
            }}>
                Login with Email
            </button>
        </div>
    );
}