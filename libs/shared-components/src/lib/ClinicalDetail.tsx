import { IClinicalDetail } from '@dr/shared-types';
import { Field } from 'formik';

const ClinicalDetail = ({
  clinicalDetail,
}: {
  clinicalDetail: IClinicalDetail;
}) => {
  return (
    <div className="row " style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <div className="col-12">
        <h2>Clinical Details</h2>
        <Field
          name={clinicalDetail.reason}
          type="textarea"
          placeholder="Please State the reason for requesting the test with history and findings"
          className=""
        />
      </div>
      <div className="col-8 bg-white border border-5 ">
        <p className="m-0">
          Name Of Clinician Requesting test{' '}
          {clinicalDetail.nameOfClinicianRequestingTest}
        </p>
        <p className="m-0">
          Clinician result inbox {clinicalDetail.clinicianResultsInbox}
        </p>
        <p className="m-0">
          Clinician contact number for emergencies{' '}
          {clinicalDetail.clinicianContactNumberForUrgentAbnormalResults}
        </p>
        <p className="m-0">
          dr-plus emergencies contact number for urgent abnoraml result{' '}
          {clinicalDetail.clinicianContactNumberForUrgentAbnormalResults}
        </p>
        <p className="m-0">
          dr-plus emergencies contact email for urgent abnoraml result{' '}
          {clinicalDetail.dr_plusEmenrgencyEmailForUrgentAbnormalResults}
        </p>
        <p>Date of Sample {clinicalDetail.dataOFSample}</p>
      </div>
      <div className="col-4 bg-white border border-5">Clinicians Signature</div>
    </div>
  );
};

export default ClinicalDetail;
