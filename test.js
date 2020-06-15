import { axeCheck, createReport } from 'axe-testcafe';

fixture `Getting Started`
    .page `./index.html`;

test('Automated accessibility testing', async t => {
    const { error, violations } = await axeCheck(t);
    await t.expect(violations.length === 0).ok(createReport(violations));
});