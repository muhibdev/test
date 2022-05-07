import {
  Header,
  ClinicalDetail,
  PatientDetails,
  FormSection,
} from '@dr/shared-components';
import { Formik } from 'formik';

import {
  IFormValues,
  IClinicalDetail,
  IPatientDetails,
} from '@dr/shared-types';

const default_patientDetails: IPatientDetails = {
  firstName: 'xxxxxxx',
  surname: 'xxxxxxx',
  dob: 'xxxxxxx',
  NHS_Number: 'xxxxxxx',
  dr_plus_ID_NO: 'xxxxxxx',
  gender: 'F',
  address: 'xxxxxxxx',
};

const default_ClinicalDetail: IClinicalDetail = {
  nameOfClinicianRequestingTest: 'xxxxxxxxxxxxxxxxxxxxx',
  clinicianContactNumberForUrgentAbnormalResults: 'xxxxxxxxxxxxxxxxx',
  dr_plusEmenrgencyEmailForUrgentAbnormalResults: 'urgent@drplus.co.uk',
  clinicianResultsInbox: '',
  dataOFSample: '',
  reason: '',
  signature: '',
};

function Index() {
  const initialValues: IFormValues = {
    PatientDetails: default_patientDetails,
    ClinicalDetail: default_ClinicalDetail,
    sections: [
      {
        title: 'Haematology',
        color: 'red',
        fields: [
          {
            label: 'full Blood Count',
            value: false,
          },
          {
            label: 'full Blood Count',
            value: false,
          },
          {
            label: 'full Blood Count',
            value: false,
          },
          {
            label: 'full Blood Count',
            value: false,
          },
          {
            label: 'full Blood Count',
            value: false,
          },
        ],
      },
      {
        title: 'Haematology',
        color: 'red',
        fields: [
          {
            label: 'full Blood Count',
            value: false,
          },
        ],
      },
      {
        title: 'Haematology',
        color: 'red',
        fields: [
          {
            label: 'full Blood Count',
            value: false,
          },
        ],
      },
      {
        title: 'Haematology',
        color: 'red',
        fields: [
          {
            label: 'full Blood Count',
            value: false,
          },
        ],
      },
      {
        title: 'Haematology',
        color: 'red',
        fields: [
          {
            label: 'full Blood Count',
            value: false,
          },
        ],
      },
    ],
  };
  return (
    <>
      <Header title="Path Test Form" />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validate={(values) => {
          const errors: any = {};
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {}}
      >
        {({ values, handleSubmit, isSubmitting, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <PatientDetails patientDetails={values.PatientDetails} />
                </div>
                <div className="col-8">
                  <ClinicalDetail clinicalDetail={values.ClinicalDetail} />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row ">
                {values.sections.map((ele, i) => (
                  <div className="col-3" key={i}>
                    <FormSection
                      color={ele.color}
                      title={ele.title}
                      fields={values.sections[i].fields}
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Index;
