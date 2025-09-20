export interface Module {
  id: number;
  title: string;
  imageLink: string;
  description: string;
  duration: number; // in minutes
}

export interface ModuleResponse {
  response: Module[];
}


export * from './module.model';