import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  Select as SelectUI,
  SelectValue,
} from "@/components/ui/select";

export type Options = {
  label: string;
  value: string;
};

type SelectProp = {
  value: string;
  options: Options[];
  onChange: (value: string) => void;
};

const Select = ({ options, value, onChange }: SelectProp) => {
  return (
    <SelectUI value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectUI>
  );
};

export default Select;
