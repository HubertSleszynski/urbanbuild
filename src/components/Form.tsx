import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="fullname" placeholder="Full Name" />
        <Input type="email" placeholder="Email Address" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="phone" placeholder="Phone Number" />
          <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
              <SelectValue placeholder="Select A Service"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select A Service</SelectLabel>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="renovation">Renovation</SelectItem>
                <SelectItem value="restoration">Restoration</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* textarea */}
        <Textarea
          className="h-[180px] resize-none rounded-none"
          placeholder="Enter Your Message"
        />
        {/* btn */}
        <Button text="Send Message" />
      </div>
    </form>
  );
};

export default Form;
