export default interface IClinicalDetail {
  nameOfClinicianRequestingTest: string;
  clinicianResultsInbox: string;
  clinicianContactNumberForUrgentAbnormalResults: string;
  dr_plusEmenrgencyEmailForUrgentAbnormalResults: string;
  dataOFSample: string;
  reason?: string;
  signature: string;
}
