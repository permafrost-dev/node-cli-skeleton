import yaml from 'js-yaml';
import Conf from 'conf';

export const createConfig = () => {
    return new Conf({
        fileExtension: 'yaml',
        cwd: __dirname,
        serialize: yaml.safeDump,
        deserialize: yaml.safeLoad,
    });
};
