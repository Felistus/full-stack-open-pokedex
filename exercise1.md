Using Python as the programming language for this project.
In creating a CI config rule for the project that handles Linting, Testing and Building, the following tools will be used to handle each step.
Linting: Pylint would be a choice to use for this step
Testing: Inc conducting unit test and E2E test, Pytest would be used to carryout this operation
Building: The Setuptools would be used for packaging the source code into executable and deployable code.

There are several other alternatives to Jenkins and GitHub Actions. These alternatives are: GitLab CI/CD, CircleCI, Travis CI, Atlassian Bamboo etc. These other tools come with several associated factors of theirown. They also have benefits and limitations. Choice of tool is dependent on what a team wants or can afford.

This setup would be best hosted on a cloud-based environment.
Since is it a small team of about 6 developers or teammates, there would be no need for using a self-hosted environment knowing too well that the application might not require so much resources.
The size of the team was what led to my decision based on the fact that it would be a lot easier to manage and using a self-hosted environment would be an over-kill and waste of resources.
