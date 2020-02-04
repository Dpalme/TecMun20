class Committee(object):
    """Object for each committee"""
    committee_type = None
    name = None
    topics = None

    def __init__(self, committee_type=None, name=None, topics=None):
        """Committee constructor
        Args:
          - committee_type: string
            - GA (General Assemblies)
            - SC (Specialized Committees)
            - CC (Crisis Committees)
          - name: string
          - topics: list<string>
        """

        self.committee_type = committee_type
        self.name = name
        self.topics = topics

    def __str__(self):
        return self.name + "topics: " + ", ".join(self.topics)
