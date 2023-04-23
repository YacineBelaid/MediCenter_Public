import { App } from '@/app';
import { ArtefactRoute } from '@routes/Artefact.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new ArtefactRoute()]);

app.listen();
