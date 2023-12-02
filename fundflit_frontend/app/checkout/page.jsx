import Link from "next/link"

const Campaign = () => {
  return (
    <div>
        <div className="felx justify-between items-center">
        <h2>Manage your campaign</h2>
        <Link href='/campaign/create'><button>New Campaign</button></Link>
        </div>
    </div>
  )
}

export default Campaign