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
    "commonux2/ui/*": ["node_modules/commonux2/dist/ui/*"]
  }
}
```

### Components

| Component     | Path                 | Status |
| ------------- | -------------------- | ------ |
| Icons         | `./icons`            | ✔️     |
| Avatar        | `./ui/avatar`        | ✔️     |
| Alert Dialog  | `./ui/alert-dialog`  | ✔️     |
| Button        | `./ui/button`        | ✔️     |
| Card          | `./ui/card`          | ✔️     |
| Checkbox      | `./ui/checkbox`      | ✔️     |
| Context Menu  | `./ui/context-menu`  | ✔️     |
| Dialog        | `./ui/dialog`        | ✔️     |
| Dropdown Menu | `./ui/dropdown-menu` | ✔️     |
| Index         | `./ui/index.ts`      | ✔️     |
| Label         | `./ui/label`         | ✔️     |
| Loader        | `./ui/loader`        | ✔️     |
| Popover       | `./ui/popover`       | ✔️     |
| Progress      | `./ui/progress`      | ✔️     |
| Radio Group   | `./ui/radio-group`   | ✔️     |
| Resizable     | `./ui/resizable`     | ✔️     |
| Select        | `./ui/select`        | ✔️     |
| Skeleton      | `./ui/skeleton`      | ✔️     |
| Slider        | `./ui/slider`        | ✔️     |
| Switch        | `./ui/switch`        | ✔️     |
| Table         | `./ui/table`         | ✔️     |
| Textarea      | `./ui/textarea`      | ✔️     |
| Toast         | `./ui/toast`         | ✔️     |
| Toaster       | `./ui/toaster`       | ✔️     |
| Toggle        | `./ui/toggle`        | ✔️     |
| Tooltip       | `./ui/tooltip`       | ✔️     |
| Use Toast     | `./ui/use-toast`     | ✔️     |
| Collapsible   | -                    | WIP    |
| Stepper       | -                    | WIP    |
| Input         | -                    | WIP    |
| Tabs          | -                    | WIP    |
| Pagination    | -                    | WIP    |
| Badge         | -                    | WIP    |
| Breadcrumb    | -                    | WIP    |
| Accordian     | -                    | WIP    |
| Calendar      | -                    | WIP    |
| Carausel      | -                    | WIP    |
| Combobox      | -                    | WIP    |
| Date picker   | -                    | WIP    |

### References

- [ShadCN UI](https://github.com/shadcn/ui)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
