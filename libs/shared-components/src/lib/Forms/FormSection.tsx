import type { Isection } from '@dr/shared-types';
import { Field } from 'formik';

const FormSection = ({ color, fields, title }: Isection) => {
  return (
    <div
      className="border border-2 rounded my-2"
      style={{
        borderColor: `${color}!important`,
      }}
    >
      <div
        style={{
          width: '100%',
          backgroundColor: color,
          color: 'white',
          fontSize: '1.2rem',
          padding: '0.5rem',
          textAlign: 'center',
          textTransform: 'capitalize',
          display: 'block',
        }}
      >
        <h4>{title}</h4>
      </div>
      <table className="table table-striped border mb-0">
        <tbody>
          {fields.map((ele, i) => {
            // @ts-ignore
            const id = ele.label.replaceAll(' ', '_') + '__' + i;
            return (
              <tr className="border">
                <td className="orm-group border p-2">
                  <Field
                    name={fields[i].value}
                    type="checkbox"
                    className="custom-control-input p-2"
                    id={id}
                  />
                </td>
                <td>
                  <label
                    htmlFor={id}
                    style={{ textTransform: 'capitalize' }}
                    className="px-2 w-100"
                  >
                    {ele.label}
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormSection;
