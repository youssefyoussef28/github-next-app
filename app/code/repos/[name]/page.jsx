import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href={"/code/repos"} className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading Repos...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
