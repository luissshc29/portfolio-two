export type Job = {
  id: number;
  function: {
    br: string;
    us: string;
  };
  company: {
    br: string;
    us: string;
  };
  description: JobTask[];
  logo: string;
  date: {
    br: string;
    us: string;
  };
  icon: React.ReactElement;
};

type JobTask = {
  id: number;
  br: string;
  us: string;
};
