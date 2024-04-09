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
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogOut}
    >
      Log Out
    </button>
  );
}