## CommonUX2.0

A collection of styled components for use in ABB projects, designed for React and Next.js. It features TypeScript support, integrates Lucide icons, and is built on [Radix primitives](https://www.radix-ui.com/) with [Tailwind CSS](https://tailwindcss.com/).

### Installation

To install, run the following command in your project:

```bash
npm install commonux2
```

### Configuration

Update your `tsconfig.json` with the following paths configuration:

```json
{
  // ...
  "baseUrl": ".",
  "paths": {
    // ...
    "commonux2/components/*": ["node_modules/commonux2/dist/components/*"]
  }
}
```

Import `style.css' from package to your main component

```tsx
// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "commonux2/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Start importing components and use it

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "commonux2/components/alert-dialog";

export function SomeComponent() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="text-red-500">Open</AlertDialogTrigger>
        // various component takes variant, size, color and classNames 
        <AlertDialogContent variant="error">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
```

### References

- [ShadCN UI](https://github.com/shadcn/ui)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
