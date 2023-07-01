<script lang="ts">
	import ListStudents from '../component/ListStudents.svelte';
	import PivotCommits from '../component/PivotCommits.svelte';

	import { standardDeviation } from '../utils';
	export let data;

	const tableData = data.students.map((student) => {
		const totalCommits = student.Commit.length;
		const lastCommitDate = student.Commit[0]?.created_on;
		const commitDates = student.Commit.map((commit) => Number(commit.created_on));
		commitDates.sort((a, b) => a - b);

		let commitGaps = [];
		for (let i = 1; i < commitDates.length; i++) {
			let gap = (commitDates[i] - commitDates[i - 1]) / (1000 * 60 * 60 * 24);
			commitGaps.push(gap);
		}

		let commitCount = commitDates.length;
		let consistencyScore = standardDeviation(commitGaps);

		let progressScore = consistencyScore !== 0 ? commitCount / consistencyScore : commitCount;

		return {
			name: student.name,
			totalCommits,
			lastCommitDate,
			progressScore: isNaN(progressScore) ? 0 : progressScore.toFixed(2)
		};
	});

	const pivotReposStudents: { [repo: string]: { [student: string]: number } } = {};

	data.commits.forEach((commit) => {
		const repoName = commit.Repo.name;
		const studentName = commit.Student.name;

		if (!(repoName in pivotReposStudents)) {
			pivotReposStudents[repoName] = {};
		}
		if (!(studentName in pivotReposStudents[repoName])) {
			pivotReposStudents[repoName][studentName] = 0;
		}
		pivotReposStudents[repoName][studentName]++;
	});

	const pivotDaysStudents: { [date: string]: { [student: string]: number } } = {};
	data.commits.forEach((commit) => {
		const date = commit.created_on.toISOString().split('T')[0]; // extract the date part
		const studentName = commit.Student.name;

		if (!(date in pivotDaysStudents)) {
			pivotDaysStudents[date] = {};
		}
		if (!(studentName in pivotDaysStudents[date])) {
			pivotDaysStudents[date][studentName] = 0;
		}
		pivotDaysStudents[date][studentName]++;
	});
</script>

<div>
	<ListStudents data={tableData} />
	<PivotCommits
		pivotTable={pivotReposStudents}
		studentNames={[...new Set(data.students.map((s) => s.name))]}
	/>
	<PivotCommits
		pivotTable={pivotDaysStudents}
		studentNames={[...new Set(data.students.map((s) => s.name))]}
	/>
</div>
