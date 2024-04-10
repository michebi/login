// LogOutButton.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function LogOutButton() {
  const router = useRouter();

  const handleLogOut = () => {
    // Perform any necessary log out actions (e.g., clear session, reset state)
    // ...

    // Navigate back to the main page
    router.push('/');
  };

  return (
    <button
      className="bg-black text-white hover:bg-neutral-800 px-4 py-3 font-base font-medium rounded-xl gap-2 hover:transition duration-300 ease-in-out w-full"
      onClick={handleLogOut}
    >
      Log Out
    </button>
  );
}