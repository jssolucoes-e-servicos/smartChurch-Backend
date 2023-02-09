export type ChurchLinkDTO = {
  id?: string;
  churchId: string;
  position: string;
  title: string;
  url: string;
  icon: string;
  blank?: boolean;
  onEAD: boolean;
  onChurch: boolean;
  onPortal: boolean;
  active?: boolean;
};
