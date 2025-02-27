export type Bill = {
  id?: string;
  description: string;
  amount: number;
  initialDate: Date;
  dueDate: Date;
}