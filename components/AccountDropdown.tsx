import Link from "next/link";

const AccountDropdown = () => {
  const account = {
    name: "John Doe",
    email: "john.doe@gmail.com",
  };

  return (
    <div className="w-48 p-4 absolute bg-white right-0 border border-slate-200 rounded-md top-full">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="font-sans font-bold text-lg text-slate-900">
          {account.name}
        </h1>
        <p className="text-slate-400 font-sans text-sm">{account.email}</p>
      </div>

      <div className="p-4">
        <ul>
          <li className="mb-3">
            <Link href="#!" className="font-sans text-slate-900 text-xs">
              My Profile
            </Link>
          </li>
          <li className="mb-3">
            <Link href="#!" className="font-sans text-slate-900 text-xs">
              My Articles
            </Link>
          </li>
          <li>
            <button type="button" className="font-sans text-xs text-red-500">
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountDropdown;
