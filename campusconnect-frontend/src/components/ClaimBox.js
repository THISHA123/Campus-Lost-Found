function ClaimBox({ handleClaim, setMessage }) {
  return (
    <div className="mt-6">
      <textarea
        className="border w-full p-2 mb-2"
        placeholder="Why is this yours?"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleClaim}
        className="bg-green-600 text-white px-6 py-2"
      >
        Claim Item
      </button>
    </div>
  );
}

export default ClaimBox;