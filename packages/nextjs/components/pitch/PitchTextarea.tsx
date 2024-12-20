"use client";

interface PitchTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function PitchTextarea({ value, onChange }: PitchTextareaProps) {
  return (
    <div>
      <label htmlFor="pitch" className="block text-sm font-medium text-gray-700 mb-2">
        Investment Pitch
      </label>
      <textarea
        id="pitch"
        name="pitch"
        required
        value={value}
        onChange={onChange}
        rows={4}
        className=" bg-white w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        placeholder="Explain your investment thesis..."
      />
      {/* at least 50 chars */}
      <p className="mt-2 text-sm text-gray-500">At least 50 characters</p>
    </div>
  );
}
