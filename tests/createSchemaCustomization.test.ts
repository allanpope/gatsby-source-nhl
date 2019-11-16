import { NodePluginArgs } from 'gatsby';
import createSchemaCustomization from '../src/createSchemaCustomization';

describe('createSchemaCustomization', () => {
  const mockCreateTypes = jest.fn();
  const createNodeHelpers = ({
    actions: {
      createTypes: mockCreateTypes,
    },
  } as unknown) as NodePluginArgs;

  beforeEach(() => {
    createSchemaCustomization(createNodeHelpers);
  });

  it('calls #createTypes with the relational schema', () => {
    expect(mockCreateTypes).toHaveBeenCalledTimes(1);
    expect(mockCreateTypes).toMatchSnapshot();
  });
});
