'use client';
import dayjs from 'dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePickerWithRange } from '@/components/ui/date-picker/DatePickerWithRange';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useStore } from '@/zuztand-store/useStore';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
  sname: z.string().min(2, { message: 'Sname must be at least 2 characters.' }),
  date: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),
  gender: z.enum(['Male', 'Female']),
  terms: z.boolean(),
});

const UserForm = () => {
  const { setUser } = useStore();
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      sname: '',
      date: {},
      gender: 'Male',
      terms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { date, ...rest } = values;
    const dateFrom: string = date.from ? dayjs(date.from).format('YYYY-MM-DD') : '';
    const dateTo: string = date.to ? dayjs(date.to).format('YYYY-MM-DD') : '';
    setUser({ ...rest, date: { from: dateFrom, to: dateTo } });
  };

  return (
    <div className="basis-1/3 flex flex-col space-y-6">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={methods.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="sname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Surname</FormLabel>
                <FormControl>
                  <Input placeholder="sname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date Range</FormLabel>
                <FormControl>
                  <DatePickerWithRange {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex flex-row"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Male" id="Male" />
                      <Label htmlFor="Male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Female" id="Female" />
                      <Label htmlFor="Female">Female</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-invalid={methods.formState.errors.terms ? 'true' : 'false'}
                    />
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default UserForm;
