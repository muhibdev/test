import { IPatientDetails } from '@dr/shared-types';

const PatientDtl = ({
  patientDetails,
}: {
  patientDetails: IPatientDetails;
}) => {
  return (
    <table className="table table-striped border">
      <tbody>
        <tr className="border">
          <td className="border"></td>
          <td className="border" width="65%">
            Patient Details
          </td>
        </tr>

        <tr className="border">
          <td className="border">Firstname</td>
          <td className="border" width="65%">
            {patientDetails.firstName}
          </td>
        </tr>

        <tr className="border">
          <td className="border">Surname</td>
          <td className="border" width="65%">
            {patientDetails.surname}
          </td>
        </tr>

        <tr className="border">
          <td className="border">DOB</td>
          <td className="border" width="65%">
            {patientDetails.dob}
          </td>
        </tr>

        <tr className="border">
          <td className="border">NHS Number</td>
          <td className="border" width="65%">
            {patientDetails.NHS_Number}
          </td>
        </tr>

        <tr className="border">
          <td className="border">dr-plus ID no</td>
          <td className="border" width="65%">
            {patientDetails.dr_plus_ID_NO}
          </td>
        </tr>

        <tr className="border">
          <td className="border">Gender</td>
          <td className="border" width="65%">
            {patientDetails.gender}
          </td>
        </tr>

        <tr className="border">
          <td className="border">Address</td>
          <td className="border" width="65%">
            {patientDetails.address}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PatientDtl;
