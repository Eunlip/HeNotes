import NoteInput from "../components/NoteInput";

export default function MainSection() {
  return (
    <main className="container h-screen">
      <h2 className='mt-10 text-4xl font-bold text-center text-white'>Make your note below</h2>
      <NoteInput />
    </main>
  )
}
