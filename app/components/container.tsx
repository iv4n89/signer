export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center items-center flex-col gap-3 container">
    {children}
  </div>
);
