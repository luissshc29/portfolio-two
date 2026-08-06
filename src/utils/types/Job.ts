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
    text: {
      br: string;
      us: string;
    };
    values: {
      startDate: Date;
      endDate?: Date | null;
    };
  };
  icon: React.ReactElement;
};

type JobTask = {
  id: number;
  br: string;
  us: string;
};
