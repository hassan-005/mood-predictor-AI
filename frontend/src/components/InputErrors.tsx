type InputErrorProps = {
  message?: string;
};

export function InputError({ message }:InputErrorProps) {
  if (!message) return null;

  return (
    <p className="mt-1 ml-1 text-sm text-red ">
      {message}
    </p>
  );
}
