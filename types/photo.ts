export type Photo = {
  id: number;
  photographer: string;
  photographer_url: string;
  src: { medium: string };
  alt: string;
  avg_color: string;
};